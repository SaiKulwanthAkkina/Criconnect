# Deploy notes

- **Frontend (GitHub Pages):** The workflow `.github/workflows/frontend.yml` builds `frontend` and deploys the `frontend/build` folder to the `gh-pages` branch. The action uses the repository `GITHUB_TOKEN`, so no additional secret is required. After the first successful run, enable GitHub Pages in repository settings (Source: `gh-pages` branch) if not auto-enabled.

- **Backend (GHCR):** The workflow `.github/workflows/backend.yml` builds the Docker image from `backend/Dockerfile` and pushes it to GitHub Container Registry as `ghcr.io/<OWNER>/cricket-intelligence-backend:latest` (replace `<OWNER>` with your account/org). It uses `GITHUB_TOKEN` with `packages: write` permission.

- **How to pull the backend image:**

```powershell
docker pull ghcr.io/OWNER/cricket-intelligence-backend:latest
```

- **Notes / Next steps:**
  - If you want automated deployment of the backend to a cloud provider, add a deployment job (e.g., to AWS, Azure, DigitalOcean) and provide required secrets in repository `Settings -> Secrets`.
  - To change the branch that triggers the workflows, edit the `on.push.branches` field in each workflow file.
