import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function DebSocAudition() {
  const [form, setForm] = useState({
    name: "",
    roll: "",
    year: "",
    email: "",
    phone: "",
    experience: "",
    why: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Audition form submitted successfully! (Demo)");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-black text-white p-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl font-bold text-center mb-4 text-white">Debating Society Auditions</h1>
        <p className="text-center text-slate-300 mb-10">
          National Institute of Technology, Durgapur
        </p>

        <Card className="bg-slate-900/70 border-slate-700 rounded-2xl shadow-xl">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-6 text-white">Audition Registration Form</h2>

            <form onSubmit={handleSubmit} className="grid gap-4">
              <input
                className="p-3 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-400"
                placeholder="Full Name"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
              />
              <input
                className="p-3 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-400"
                placeholder="Roll Number"
                name="roll"
                value={form.roll}
                onChange={handleChange}
                required
              />
              <input
                className="p-3 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-400"
                placeholder="Year (1st / 2nd / 3rd / 4th)"
                name="year"
                value={form.year}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                className="p-3 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-400"
                placeholder="Institute Email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
              />
              <input
                className="p-3 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-400"
                placeholder="Phone Number"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                required
              />
              <textarea
                className="p-3 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-400"
                placeholder="Previous Debate / Public Speaking Experience (if any)"
                name="experience"
                value={form.experience}
                onChange={handleChange}
                rows={3}
              />
              <textarea
                className="p-3 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-400"
                placeholder="Why do you want to join the Debating Society?"
                name="why"
                value={form.why}
                onChange={handleChange}
                rows={4}
                required
              />

              <Button type="submit" className="mt-4 w-full rounded-2xl text-lg text-white">
                Submit Application
              </Button>
            </form>
          </CardContent>
        </Card>

        <p className="text-center text-slate-400 mt-8 text-sm">
          Shortlisted candidates will be informed via email. 
        </p>
      </motion.div>
    </div>
  );
}
