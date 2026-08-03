import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";

interface UserSignup {
  id: string;
  email: string;
  userType?: string; // e.g. student, starter, other
  createdAt: string;
}

interface BusinessSignup {
  id: string;
  email: string;
  companyName?: string;
  contactPerson: string;
  sector?: string;
  createdAt: string;
}

const userSignups: UserSignup[] = [];

const businessSignups: BusinessSignup[] = [];

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Route: User Signup
  app.post("/api/signup/user", (req, res) => {
    const { email, userType } = req.body || {};

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return res.status(400).json({
        success: false,
        error: "Vul a.u.b. een geldig e-mailadres in.",
      });
    }

    const trimmedEmail = email.trim().toLowerCase();

    // Check duplicate
    const existing = userSignups.find((u) => u.email === trimmedEmail);
    if (existing) {
      return res.json({
        success: true,
        message: "Je bent al aangemeld! We houden je op de hoogte zodra de extensie live gaat.",
        alreadyRegistered: true,
        id: existing.id,
        totalUsers: userSignups.length,
      });
    }

    const newSignup: UserSignup = {
      id: `usr_${Math.random().toString(36).substring(2, 9)}`,
      email: trimmedEmail,
      userType: userType || "student",
      createdAt: new Date().toISOString(),
    };

    userSignups.push(newSignup);

    return res.status(201).json({
      success: true,
      message: "Hoera! Je bent toegevoegd aan de Promptkoffie bèta-wachtlijst.",
      id: newSignup.id,
      totalUsers: userSignups.length,
    });
  });

  // API Route: Business Signup
  app.post("/api/signup/business", (req, res) => {
    const { email, companyName, contactPerson, sector } = req.body || {};

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return res.status(400).json({
        success: false,
        error: "Vul a.u.b. een geldig zakelijk e-mailadres in.",
      });
    }

    if (!contactPerson || typeof contactPerson !== "string" || !contactPerson.trim()) {
      return res.status(400).json({
        success: false,
        error: "Vul a.u.b. een contactpersoon in.",
      });
    }

    const newBusiness: BusinessSignup = {
      id: `biz_${Math.random().toString(36).substring(2, 9)}`,
      email: email.trim().toLowerCase(),
      companyName: companyName ? String(companyName).trim() : undefined,
      contactPerson: contactPerson.trim(),
      sector: sector ? String(sector).trim() : undefined,
      createdAt: new Date().toISOString(),
    };

    businessSignups.push(newBusiness);

    return res.status(201).json({
      success: true,
      message: "Hartelijk dank! Onze partnership manager neemt binnen 24 uur contact op.",
      id: newBusiness.id,
      totalBusinesses: businessSignups.length,
    });
  });

  // API Route: Stats for Landing Page
  app.get("/api/stats", (req, res) => {
    res.json({
      totalUsers: userSignups.length,
      totalBusinesses: businessSignups.length,
      averageCupsPerMonth: "2 - 3",
      privacyRating: "100% Zero-Read",
    });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Promptkoffie server running on http://localhost:${PORT}`);
  });
}

startServer();
