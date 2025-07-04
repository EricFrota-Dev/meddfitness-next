"use client";
// import { useState } from "react";
// import { supabase } from "@/lib/supabase";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { useRouter } from "next/navigation";

export function AuthForm({ type }: { type: "login" | "signup" }) {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [loading, setLoading] = useState(false);
  // const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    alert(type);
  }
  //   e.preventDefault();
  //   setLoading(true);

  //   const fn =
  //     type === "login"
  //       ? supabase.auth.signInWithPassword
  //       : supabase.auth.signUp;

  //   const { error } = await fn({ email, password });

  //   setLoading(false);
  //   if (error) return alert(error.message);
  //   router.push("/dashboard");
  // }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-sm mx-auto">
      {/* <Input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <Input
        type="password"
        placeholder="Senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <Button type="submit" disabled={loading} className="w-full">
        {loading ? "Enviando..." : type === "login" ? "Entrar" : "Cadastrar"}
      </Button> */}
    </form>
  );
}
