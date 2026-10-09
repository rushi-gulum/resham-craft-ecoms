"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCart } from "@/lib/cart-context";
import { toast } from "sonner";
import { Lock, Mail, User, ArrowRight, Sparkles, KeyRound } from "lucide-react";

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

  // Fill in demo credentials
  const fillDemoCredentials = () => {
    setFormData({
      name: "Ananya Sharma",
      email: "demo@reshamcraft.com",
      password: "password123"
    });
    toast.info("Demo credentials loaded!");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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
        {/* Demo Helper Callout */}
        <div className="mb-6 p-4 bg-accent/10 border border-accent/40 rounded-sm">
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-2 text-primary font-semibold text-xs">
              <KeyRound className="w-4 h-4 text-accent" />
              <span>Demo Quick Login</span>
            </div>
            <button
              type="button"
              onClick={fillDemoCredentials}
              className="text-xs uppercase tracking-wider font-bold text-accent hover:text-primary underline cursor-pointer"
            >
              Autofill Demo
            </button>
          </div>
          <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
            <strong>Email:</strong> <code className="bg-white/80 px-1.5 py-0.5 rounded text-primary font-medium">demo@reshamcraft.com</code> <br />
            <strong>Password:</strong> <code className="bg-white/80 px-1.5 py-0.5 rounded text-primary font-medium">password123</code>
          </p>
        </div>

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
          <form onSubmit={handleSubmit} className="space-y-5">
            {isRegister && (
              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-primary mb-1.5">
                  Full Name
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-muted-foreground absolute left-3.5 top-3.5" />
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Ananya Sharma"
                    className="w-full pl-10 pr-4 py-3 text-sm bg-background border border-border focus:border-accent focus:outline-none transition-colors text-primary"
                  />
                </div>
              </div>
            )}

            <div>
              <label className="block text-xs uppercase tracking-wider font-semibold text-primary mb-1.5">
                Email Address
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-muted-foreground absolute left-3.5 top-3.5" />
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="demo@reshamcraft.com"
                  className="w-full pl-10 pr-4 py-3 text-sm bg-background border border-border focus:border-accent focus:outline-none transition-colors text-primary"
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-1.5">
                <label className="block text-xs uppercase tracking-wider font-semibold text-primary">
                  Password
                </label>
                {!isRegister && (
                  <button
                    type="button"
                    onClick={() => toast.info("Demo: Use password123")}
                    className="text-xs text-accent hover:underline uppercase tracking-wider font-medium"
                  >
                    Forgot Password?
                  </button>
                )}
              </div>
              <div className="relative">
                <Lock className="w-4 h-4 text-muted-foreground absolute left-3.5 top-3.5" />
                <input
                  type="password"
                  required
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  placeholder="password123"
                  className="w-full pl-10 pr-4 py-3 text-sm bg-background border border-border focus:border-accent focus:outline-none transition-colors text-primary"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-4 bg-primary text-white text-xs uppercase tracking-[0.25em] font-bold hover:bg-primary/95 transition-all shadow-md flex items-center justify-center gap-2 mt-6 disabled:opacity-75 cursor-pointer"
            >
              {isLoading ? (
                "Authenticating..."
              ) : isRegister ? (
                <>
                  Create Account <Sparkles className="w-3.5 h-3.5 text-accent" />
                </>
              ) : (
                <>
                  Sign In to Account <ArrowRight className="w-3.5 h-3.5 text-accent" />
                </>
              )}
            </button>
          </form>

          {/* Toggle between Login and Register */}
          <div className="mt-8 pt-6 border-t border-border/50 text-center">
            <p className="text-sm text-muted-foreground">
              {isRegister ? "Already a royal circle member?" : "New to Resham Craft?"}{" "}
              <button
                type="button"
                onClick={() => setIsRegister(!isRegister)}
                className="text-primary font-bold hover:text-accent hover:underline uppercase tracking-wider text-xs ml-1 cursor-pointer"
              >
                {isRegister ? "Sign In Here" : "Create Account"}
              </button>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
