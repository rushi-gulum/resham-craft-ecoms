"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCart } from "@/lib/cart-context";
import { toast } from "sonner";
import { Lock, Mail, User, ArrowRight, Eye, EyeOff } from "@/components/icons";
import { TextField } from "@/components/form-fields";

export default function LoginPage() {
  const router = useRouter();
  const { loginUser, user } = useCart();
  const [isRegister, setIsRegister] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<{ name?: string; email?: string; password?: string }>({});

  const updateField = (field: keyof typeof formData, value: string) => {
    setFormData((data) => ({ ...data, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  };

  const validate = () => {
    const found: typeof errors = {};
    if (isRegister && !formData.name.trim()) found.name = "Please enter your name";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) found.email = "Please enter a valid email";
    if (!formData.password) found.password = "Please enter your password";
    return found;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const found = validate();
    setErrors(found);
    const firstInvalid = Object.keys(found)[0];
    if (firstInvalid) {
      document.getElementById(`login-${firstInvalid}`)?.focus();
      return;
    }
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      loginUser(formData.email, isRegister && formData.name ? formData.name : "Ananya Sharma");
      toast.success(isRegister ? "Welcome to the Royal Circle!" : "Welcome back, Ananya!", {
        description: "Authenticated successfully"
      });
      router.push("/profile");
    }, 600);
  };

  return (
    <main className="flex-1 py-16 md:py-24 flex items-center justify-center bg-muted/10">
      <div className="container mx-auto px-4 max-w-md">
        <div className="bg-card border border-border/60 p-8 md:p-10 shadow-xl">
          {/* Logo Brand Header */}
          <div className="text-center mb-8">
            <Link href="/" className="inline-flex items-center gap-2 mb-4">
              <Image
                src="/images/reshamcraft_nobg_1768746306662.png"
                alt="Resham Craft Logo"
                width={44}
                height={44}
                className="h-11 w-auto"
              />
              <span className="font-serif text-xl tracking-[0.2em] font-bold uppercase text-primary">
                Resham Craft
              </span>
            </Link>
            <h1 className="text-2xl md:text-3xl font-serif text-primary">
              {isRegister ? "Join Royal Circle" : "Client Sign In"}
            </h1>
            <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
              {isRegister
                ? "Create your bespoke account for bridal perks & order tracking"
                : "Access your saved wishlists, past orders, and concierge"}
            </p>
          </div>

          {/* Form */}
          <form noValidate onSubmit={handleSubmit} className="space-y-4">
            {isRegister && (
              <div className="tick-in">
                <TextField
                  id="login-name"
                  label="Full Name"
                  icon={User}
                  autoComplete="name"
                  value={formData.name}
                  error={errors.name}
                  onChange={(e) => updateField("name", e.target.value)}
                  placeholder="Ananya Sharma"
                />
              </div>
            )}

            <TextField
              id="login-email"
              label="Email Address"
              icon={Mail}
              type="email"
              autoComplete="email"
              value={formData.email}
              error={errors.email}
              onChange={(e) => updateField("email", e.target.value)}
              placeholder="you@example.com"
            />

            <TextField
              id="login-password"
              label="Password"
              icon={Lock}
              type={showPassword ? "text" : "password"}
              autoComplete={isRegister ? "new-password" : "current-password"}
              value={formData.password}
              error={errors.password}
              onChange={(e) => updateField("password", e.target.value)}
              placeholder="Enter your password"
              labelAction={
                !isRegister && (
                  <button
                    type="button"
                    onClick={() => toast.info("Password reset is coming soon")}
                    className="text-[11px] text-accent hover:underline uppercase tracking-wider font-medium"
                  >
                    Forgot Password?
                  </button>
                )
              }
              trailing={
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  className="w-10 h-10 inline-flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              }
            />

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-4 bg-primary text-white text-xs uppercase tracking-[0.25em] font-bold hover:bg-primary/95 transition-all shadow-md flex items-center justify-center gap-2 mt-6 disabled:opacity-75 cursor-pointer"
            >
              {isLoading ? (
                "Authenticating..."
              ) : isRegister ? (
                <>
                  Create Account <ArrowRight className="w-3.5 h-3.5 text-accent" />
                </>
              ) : (
                <>
                  Sign In to Account <ArrowRight className="w-3.5 h-3.5 text-accent" />
                </>
              )}
            </button>
          </form>

          {/* Toggle between Login and Register */}
          <div className="mt-6 pt-6 border-t border-border/50 text-center">
            <p className="text-sm text-muted-foreground mb-3">
              {isRegister ? "Already a royal circle member?" : "New to Resham Craft?"}
            </p>
            <button
              type="button"
              onClick={() => {
                setIsRegister(!isRegister);
                setErrors({});
              }}
              className="w-full h-12 border border-primary text-primary hover:bg-primary hover:text-white text-xs uppercase tracking-[0.2em] font-bold transition duration-300 ease-out hover:-translate-y-0.5 active:translate-y-0"
            >
              {isRegister ? "Sign In Instead" : "Create an Account"}
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
