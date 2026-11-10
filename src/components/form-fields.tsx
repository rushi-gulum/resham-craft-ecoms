"use client";

import {
  useCallback,
  useEffect,
  useId,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import type { ComponentType, CSSProperties, InputHTMLAttributes, KeyboardEvent, ReactNode, TextareaHTMLAttributes } from "react";
import { createPortal } from "react-dom";
import { Calendar, Check, ChevronDown, ChevronRight } from "@/components/icons";
import type { IconProps } from "@/components/icons";
import { cn } from "@/lib/utils";

type Icon = ComponentType<IconProps>;

const CONTROL =
  "w-full bg-background border text-sm text-primary outline-none transition duration-200 hover:border-accent/70 focus:border-accent focus:bg-card focus:ring-2 focus:ring-accent/25 placeholder:text-muted-foreground/60";

const controlBorder = (error?: string, open?: boolean) =>
  error
    ? "border-destructive focus:border-destructive focus:ring-destructive/20"
    : open
      ? "border-accent bg-card ring-2 ring-accent/25"
      : "border-border";

function Field({
  id,
  label,
  hideLabel,
  optional,
  labelAction,
  error,
  children,
}: {
  id: string;
  label: string;
  hideLabel?: boolean;
  optional?: boolean;
  labelAction?: ReactNode;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div>
      {hideLabel ? (
        <label htmlFor={id} className="sr-only">
          {label}
        </label>
      ) : (
        <div className="flex items-baseline justify-between gap-3 mb-1.5">
          <label htmlFor={id} className="text-[11px] uppercase tracking-wider font-semibold text-primary">
            {label}
          </label>
          {optional && <span className="text-[11px] text-muted-foreground">Optional</span>}
          {labelAction}
        </div>
      )}
      {children}
      {error && (
        <p id={`${id}-error`} role="alert" className="tick-in text-[11px] font-medium text-destructive mt-1">
          {error}
        </p>
      )}
    </div>
  );
}

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  icon?: Icon;
  error?: string;
  /** Shown at the end of the label row, such as a "Forgot password?" link. */
  labelAction?: ReactNode;
  /** Shown inside the box on the right, such as a show-password button. */
  trailing?: ReactNode;
}

export function TextField({ label, icon: LeadingIcon, error, labelAction, trailing, id, className, ...props }: TextFieldProps) {
  const fallbackId = useId();
  const fieldId = id ?? fallbackId;
  return (
    <Field id={fieldId} label={label} error={error} labelAction={labelAction}>
      <div className="relative">
        {LeadingIcon && (
          <LeadingIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-accent pointer-events-none" />
        )}
        <input
          id={fieldId}
          aria-invalid={!!error}
          aria-describedby={error ? `${fieldId}-error` : undefined}
          className={cn(CONTROL, controlBorder(error), "h-12", trailing ? "pr-11" : "pr-3", LeadingIcon ? "pl-10" : "pl-3", className)}
          {...props}
        />
        {trailing && <div className="absolute right-1 top-1/2 -translate-y-1/2">{trailing}</div>}
      </div>
    </Field>
  );
}

interface TextAreaFieldProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  optional?: boolean;
  error?: string;
}

export function TextAreaField({ label, optional, error, id, className, ...props }: TextAreaFieldProps) {
  const fallbackId = useId();
  const fieldId = id ?? fallbackId;
  return (
    <Field id={fieldId} label={label} optional={optional} error={error}>
      <textarea
        id={fieldId}
        aria-invalid={!!error}
        className={cn(CONTROL, controlBorder(error), "block px-3 py-2.5 resize-none leading-relaxed", className)}
        {...props}
      />
    </Field>
  );
}

/** Opens in a portal so a scrolling parent, like a modal, can't cut it off. */
function usePopover(minWidth: number) {
  const [open, setOpen] = useState(false);
  const [style, setStyle] = useState<CSSProperties>({ position: "fixed", visibility: "hidden" });
  const triggerRef = useRef<HTMLButtonElement>(null);
  const popoverRef = useRef<HTMLDivElement>(null);

  const place = useCallback(() => {
    const trigger = triggerRef.current;
    const popover = popoverRef.current;
    if (!trigger || !popover) return;
    const gap = 6;
    const edge = 8;
    const rect = trigger.getBoundingClientRect();
    const width = Math.min(Math.max(rect.width, minWidth), window.innerWidth - edge * 2);
    const height = popover.offsetHeight;
    const fitsBelow = rect.bottom + gap + height <= window.innerHeight - edge;
    const fitsAbove = rect.top - gap - height >= edge;
    const top = fitsBelow || !fitsAbove ? rect.bottom + gap : rect.top - gap - height;
    setStyle({
      position: "fixed",
      top: Math.max(edge, Math.min(top, window.innerHeight - height - edge)),
      left: Math.max(edge, Math.min(rect.left, window.innerWidth - width - edge)),
      width,
      zIndex: 60,
      transformOrigin: fitsBelow || !fitsAbove ? "top" : "bottom",
    });
  }, [minWidth]);

  useLayoutEffect(() => {
    if (!open) return;
    place();
    const onPointerDown = (e: PointerEvent) => {
      const target = e.target as Node;
      if (!popoverRef.current?.contains(target) && !triggerRef.current?.contains(target)) setOpen(false);
    };
    window.addEventListener("scroll", place, true);
    window.addEventListener("resize", place);
    window.addEventListener("pointerdown", onPointerDown);
    return () => {
      window.removeEventListener("scroll", place, true);
      window.removeEventListener("resize", place);
      window.removeEventListener("pointerdown", onPointerDown);
    };
  }, [open, place]);

  return { open, setOpen, style, triggerRef, popoverRef };
}

interface SelectFieldProps {
  id?: string;
  label: string;
  /** Keeps the label for screen readers only, for tight toolbars. */
  hideLabel?: boolean;
  /** Extra classes for the visible box, such as a shorter height. */
  className?: string;
  icon?: Icon;
  value: string;
  options: { value: string; label: string; hint?: string }[];
  onChange: (value: string) => void;
}

export function SelectField({ id, label, hideLabel, className, icon: LeadingIcon, value, options, onChange }: SelectFieldProps) {
  const fallbackId = useId();
  const fieldId = id ?? fallbackId;
  const listId = `${fieldId}-list`;
  const { open, setOpen, style, triggerRef, popoverRef } = usePopover(220);
  const selectedIndex = Math.max(0, options.findIndex((o) => o.value === value));
  const [activeIndex, setActiveIndex] = useState(selectedIndex);
  const selected = options[selectedIndex];

  useEffect(() => {
    if (open) document.getElementById(`${listId}-${activeIndex}`)?.scrollIntoView({ block: "nearest" });
  }, [open, activeIndex, listId]);

  const openList = () => {
    setActiveIndex(selectedIndex);
    setOpen(true);
  };

  const choose = (index: number) => {
    onChange(options[index].value);
    setOpen(false);
    triggerRef.current?.focus();
  };

  const onKeyDown = (e: KeyboardEvent) => {
    if (!open) {
      if (["ArrowDown", "ArrowUp", "Enter", " "].includes(e.key)) {
        e.preventDefault();
        openList();
      }
      return;
    }
    if (e.key === "Escape") {
      e.preventDefault();
      e.stopPropagation();
      setOpen(false);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((i) => Math.min(i + 1, options.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      choose(activeIndex);
    } else if (e.key === "Tab") {
      setOpen(false);
    }
  };

  return (
    <Field id={fieldId} label={label} hideLabel={hideLabel}>
      <button
        ref={triggerRef}
        id={fieldId}
        type="button"
        role="combobox"
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-controls={listId}
        aria-activedescendant={open ? `${listId}-${activeIndex}` : undefined}
        onClick={() => (open ? setOpen(false) : openList())}
        onKeyDown={onKeyDown}
        className={cn(CONTROL, controlBorder(undefined, open), "relative h-12 flex items-center text-left pr-9", LeadingIcon ? "pl-10" : "pl-3", className)}
      >
        {LeadingIcon && <LeadingIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-accent" />}
        <span className="truncate">{selected?.label}</span>
        <ChevronDown
          className={cn(
            "absolute right-3 top-1/2 -mt-2 w-4 h-4 text-muted-foreground transition-transform duration-200",
            open && "rotate-180"
          )}
        />
      </button>

      {open &&
        createPortal(
          <div ref={popoverRef} style={style}>
            <ul id={listId} role="listbox" aria-label={label} className="popover-in max-h-64 overflow-y-auto bg-card border border-border shadow-xl py-1">
              {options.map((option, index) => (
                <li
                  key={option.value}
                  id={`${listId}-${index}`}
                  role="option"
                  aria-selected={option.value === value}
                  onMouseEnter={() => setActiveIndex(index)}
                  onClick={() => choose(index)}
                  className={cn(
                    "flex items-center justify-between gap-3 px-3 py-2.5 text-sm cursor-pointer transition-colors",
                    index === activeIndex ? "bg-accent/15" : "",
                    option.value === value ? "text-primary font-semibold" : "text-foreground/80"
                  )}
                >
                  <span>
                    {option.label}
                    {option.hint && <span className="block text-[11px] font-normal text-muted-foreground">{option.hint}</span>}
                  </span>
                  {option.value === value && <Check className="w-4 h-4 text-accent shrink-0" />}
                </li>
              ))}
            </ul>
          </div>,
          document.body
        )}
    </Field>
  );
}

const WEEKDAYS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

// Dates stay as local yyyy-mm-dd strings, so time zones can't shift the day.
const toIso = (date: Date) =>
  `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;

const fromIso = (iso: string) => {
  const [year, month, day] = iso.split("-").map(Number);
  return new Date(year, month - 1, day);
};

const addDays = (iso: string, days: number) => {
  const date = fromIso(iso);
  date.setDate(date.getDate() + days);
  return toIso(date);
};

const addMonths = (iso: string, months: number) => {
  const date = fromIso(iso);
  const day = date.getDate();
  date.setDate(1);
  date.setMonth(date.getMonth() + months);
  const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  date.setDate(Math.min(day, lastDay));
  return toIso(date);
};

interface DateFieldProps {
  id?: string;
  label: string;
  value: string;
  placeholder?: string;
  error?: string;
  onChange: (value: string) => void;
}

/** A date picker that only offers today or later. */
export function DateField({ id, label, value, placeholder = "Select a date", error, onChange }: DateFieldProps) {
  const fallbackId = useId();
  const fieldId = id ?? fallbackId;
  const { open, setOpen, style, triggerRef, popoverRef } = usePopover(292);
  const [today, setToday] = useState("");
  const [focused, setFocused] = useState("");
  const [view, setView] = useState({ year: 2026, month: 0 });

  const showDate = (iso: string) => {
    const date = fromIso(iso);
    setFocused(iso);
    setView({ year: date.getFullYear(), month: date.getMonth() });
  };

  const openCalendar = () => {
    const now = toIso(new Date());
    setToday(now);
    showDate(value && value >= now ? value : now);
    setOpen(true);
  };

  const shiftMonth = (months: number) => {
    const next = new Date(view.year, view.month + months, 1);
    setView({ year: next.getFullYear(), month: next.getMonth() });
  };

  const choose = (iso: string) => {
    onChange(iso);
    setOpen(false);
    triggerRef.current?.focus();
  };

  // Move keyboard focus along with the highlighted day. The calendar can't take
  // focus until it has been positioned and made visible.
  const positioned = open && style.visibility !== "hidden";
  useEffect(() => {
    if (!positioned) return;
    popoverRef.current?.querySelector<HTMLElement>(`[data-day="${focused}"]`)?.focus({ preventScroll: true });
  }, [positioned, focused, view, popoverRef]);

  const moveFocus = (iso: string) => {
    if (iso >= today) showDate(iso);
    else showDate(today);
  };

  const onKeyDown = (e: KeyboardEvent) => {
    const moves: Record<string, () => void> = {
      ArrowLeft: () => moveFocus(addDays(focused, -1)),
      ArrowRight: () => moveFocus(addDays(focused, 1)),
      ArrowUp: () => moveFocus(addDays(focused, -7)),
      ArrowDown: () => moveFocus(addDays(focused, 7)),
      PageUp: () => moveFocus(addMonths(focused, -1)),
      PageDown: () => moveFocus(addMonths(focused, 1)),
    };
    if (moves[e.key]) {
      e.preventDefault();
      moves[e.key]();
    } else if (e.key === "Escape") {
      e.preventDefault();
      e.stopPropagation();
      setOpen(false);
      triggerRef.current?.focus();
    }
  };

  const firstOfMonth = new Date(view.year, view.month, 1);
  const daysInMonth = new Date(view.year, view.month + 1, 0).getDate();
  const blanks = firstOfMonth.getDay();
  const monthLabel = firstOfMonth.toLocaleDateString("en-IN", { month: "long", year: "numeric" });
  const canGoBack = today !== "" && toIso(new Date(view.year, view.month, 1)) > today.slice(0, 8) + "01";
  const display = value
    ? fromIso(value).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })
    : "";

  return (
    <Field id={fieldId} label={label} error={error}>
      <button
        ref={triggerRef}
        id={fieldId}
        type="button"
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-invalid={!!error}
        onClick={() => (open ? setOpen(false) : openCalendar())}
        className={cn(CONTROL, controlBorder(error, open), "relative h-12 flex items-center text-left pl-10 pr-3")}
      >
        <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-accent" />
        <span className={cn("truncate", !display && "text-muted-foreground/60")}>{display || placeholder}</span>
      </button>

      {open &&
        createPortal(
          <div ref={popoverRef} style={style}>
            <div
              role="dialog"
              aria-label={`Choose ${label.toLowerCase()}`}
              onKeyDown={onKeyDown}
              className="popover-in bg-card border border-border shadow-xl p-3"
            >
              <div className="flex items-center justify-between mb-2">
                <button
                  type="button"
                  onClick={() => shiftMonth(-1)}
                  disabled={!canGoBack}
                  aria-label="Previous month"
                  className="w-8 h-8 inline-flex items-center justify-center text-primary hover:bg-accent/15 disabled:opacity-30 disabled:hover:bg-transparent transition-colors"
                >
                  <ChevronRight className="w-4 h-4 rotate-180" />
                </button>
                <span key={monthLabel} className="tick-in font-serif text-base text-primary font-semibold">
                  {monthLabel}
                </span>
                <button
                  type="button"
                  onClick={() => shiftMonth(1)}
                  aria-label="Next month"
                  className="w-8 h-8 inline-flex items-center justify-center text-primary hover:bg-accent/15 transition-colors"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              <div className="grid grid-cols-7 mb-1">
                {WEEKDAYS.map((day) => (
                  <span key={day} className="h-8 flex items-center justify-center text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
                    {day}
                  </span>
                ))}
              </div>

              <div key={monthLabel} className="tick-in grid grid-cols-7 gap-0.5">
                {Array.from({ length: blanks }, (_, i) => (
                  <span key={`blank-${i}`} />
                ))}
                {Array.from({ length: daysInMonth }, (_, i) => {
                  const iso = toIso(new Date(view.year, view.month, i + 1));
                  const isPast = iso < today;
                  const isSelected = iso === value;
                  return (
                    <button
                      key={iso}
                      type="button"
                      data-day={iso}
                      disabled={isPast}
                      tabIndex={iso === focused ? 0 : -1}
                      aria-pressed={isSelected}
                      aria-current={iso === today ? "date" : undefined}
                      onClick={() => choose(iso)}
                      className={cn(
                        "h-9 text-sm outline-none transition-colors focus-visible:ring-2 focus-visible:ring-accent",
                        isSelected
                          ? "bg-primary text-white font-semibold"
                          : isPast
                            ? "text-muted-foreground/35 cursor-not-allowed"
                            : "text-primary hover:bg-accent/20",
                        iso === today && !isSelected && "font-bold text-accent ring-1 ring-inset ring-accent/50"
                      )}
                    >
                      {i + 1}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>,
          document.body
        )}
    </Field>
  );
}
