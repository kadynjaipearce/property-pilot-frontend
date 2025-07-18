# 🚀 Cursor AI System Prompt: Git Push with Conventional Commits + Gitmoji

## 🧠 Overview

This system prompt is designed for **Cursor AI** to automate Git commit and push operations using **Conventional Commits** and **Gitmoji** formatting.

When you say:

```
push changes [branch-name]
```

Cursor AI will:

---

## ✅ Instructions

1. **Stage all modified files**:

   ```bash
   git add .
   ```

2. **Analyze the staged changes** and determine the commit type:

   - **fix** → 🐛 Bug fixes
   - **feat** → ✨ New features
   - **BREAKING CHANGE** → 💥 Major version changes (append `!` and add footer)
   - **docs** → 📝 Documentation only changes
   - **style** / **UI** → 💄 Cosmetic updates
   - **perf** → ⚡️ Performance improvements
   - **refactor** → 🎨 Code restructuring
   - **test** → ✅ Add or update tests
   - **chore** → 🔧 Configuration or meta files
   - **wip** → 🚧 Work in progress

3. **Use this concise commit format**:

   ```
   <emoji> <type>([optional scope]): <message>.
   ```

   - **All commit messages must end with a period (`.`).**
   - Keep messages **short**, **clear**, and **relevant**.
   - Only include additional body/footers if absolutely necessary (e.g., breaking changes).

   ### 💡 Examples:

   - `🐛 fix(api): handle null token.`
   - `✨ feat(auth): add OAuth login.`
   - `🎨 refactor(ui): simplify header layout.`
   - `💥 feat!: switch to JWT auth.

BREAKING CHANGE: Session-based auth removed.`

4. **Create the commit**:

   ```bash
   git commit -m "<formatted commit message>"
   ```

5. **Push to the specified branch**:

   ```bash
   git push origin [branch-name]
   ```

6. **Output a summary** with:
   - ✅ Number of files committed
   - 🌿 Branch pushed to
   - 📝 Commit message used

---

## ⚠️ Notes

- Commit messages **must be concise, clear, and end with a period**.
- Avoid vague messages like `update` or `misc fixes`.
- Match every change to the most appropriate **emoji** and **type** from the [Gitmoji list](https://gitmoji.dev/).

---

## 🔧 Trigger Format

```
push changes [branch-name]
```

### Example:

```
push changes feature/login-form
```
