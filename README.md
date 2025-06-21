# 🔐 Hard-Coded Secret (Part One - Secrets Management Assignment)

This Node.js app demonstrates **poor secrets management** practices by hard-coding sensitive values like an API key directly into the source code. **This is done intentionally for educational purposes only.**

---

## 📌 Purpose

- Show why hard-coding secrets is a security risk.
- Demonstrate what happens when secrets are embedded in application code.
- Lay the foundation for exploring better practices in Parts 2 and 3 of the assignment.

---

## ⚙️ How It Works

- The app uses **Express** to run a simple HTTP server.
- A hard-coded secret (`API_KEY`) is stored directly in the code.
- You can view the secret by visiting the route:

```bash
GET http://localhost:3000/secret
```

Example JSON response:

```json
{
  "success": true,
  "message": "Here is a hard coded API key, this is meant for educational purposes only.",
  "API_KEY": "doNotHardCodeMe#BadPractice"
}
```

## 🛠 Setup Instructions

- Clone this repository:

```bash
git clone <your-repo-url>
cd <your-repo-name>
```

- Install dependencies:

```bash
npm install express
Run the app:
node app.js
```

- Open your browser to:

```bash
http://localhost:3000/secret
```

## 🚨 Why This Is Bad

Hard-coding secrets in source code is a common beginner mistake and a serious security vulnerability. If this repository were public or shared:

The API key could be easily stolen or abused.
GitHub may trigger security alerts.
You may accidentally expose real production credentials.

## ✅ What’s Next

In the upcoming steps, we'll explore:

- Shared secrets file pushed to the repo (still insecure)
- Secure secrets management using .env files and .gitignore (best practice)
- This project is part of a multi-step assignment exploring secrets management and its real-world implications.

---

### ✅ How to Use

- Save this as `README.md` in your project root.
- GitHub will automatically render it when someone visits your repo.
