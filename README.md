# Sly Portfolio

A static Next.js portfolio configured for GitHub Pages.

## Run Locally

```bash
npm install
npm run dev
```

## Deploy To GitHub Pages

1. Create a GitHub repository and push this project to its `main` branch.
2. Open the repository on GitHub.
3. Go to **Settings > Pages**.
4. Under **Build and deployment**, choose **GitHub Actions** as the source.
5. Push a commit or run the **Deploy Next.js site to Pages** workflow manually from the **Actions** tab.

The workflow builds the static site into `out/` and publishes it automatically. Project repositories are served at:

```text
https://<github-username>.github.io/<repository-name>/
```

## Verify The Static Export Locally

```bash
npm run build
```
