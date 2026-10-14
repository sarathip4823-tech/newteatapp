# คู่มือการติดตั้งและ Deploy สู่ Cloudflare Pages แบบอัตโนมัติ (CI/CD)

ระบบ **NewTeaApp** ได้รับการออกแบบและเตรียมพร้อมสำหรับการ Deploy ขึ้น **Cloudflare Pages** สองรูปแบบ ทั้งแบบ **Git Integration อัตโนมัติ (แนะนำ)** และผ่าน **GitHub Actions CI/CD Pipeline**

---

## วิธีที่ 1: Deploy อัตโนมัติผ่าน Cloudflare Pages Git Integration (ง่ายที่สุดและแนะนำ)

เมื่อเชื่อมต่อกับ GitHub หรือ GitLab ทุกครั้งที่คุณ `git push` โค้ดใหม่ Cloudflare จะดึงโค้ดไป Build และ Deploy ให้อัตโนมัติทันที

### ขั้นตอน:
1. สร้าง Git Repository บน GitHub:
   ```bash
   git add .
   git commit -m "feat: Initial MVP e-commerce app release for Cloudflare"
   git branch -M main
   git remote add origin https://github.com/<YOUR_USERNAME>/newteatapp.git
   git push -u origin main
   ```
2. เข้าสู่ระบบ [Cloudflare Dashboard](https://dash.cloudflare.com/)
3. ไปที่เมนู **Workers & Pages** > **Create application** > เลือกแถบ **Pages** > **Connect to Git**
4. เลือก Repository `newteatapp` ของคุณ
5. ตั้งค่าการ Build (Configuration Settings):
   * **Framework preset:** `Vite` (หรือเลือก `None`)
   * **Build command:** `npm run build`
   * **Build output directory:** `dist`
   * **Node.js Version:** `20` (ใน Environment variables: ใส่ `NODE_VERSION` = `20`)
6. กดปุ่ม **Save and Deploy**
7. ระบบจะทำการ Deploy ภายใน 30-60 วินาที และมอบ URL โดเมน เช่น `https://newteatapp.pages.dev` ใช้งานได้ทั่วโลกทันที!

---

## วิธีที่ 2: Deploy อัตโนมัติผ่าน GitHub Actions (CI/CD Pipeline)

โปรเจกต์นี้มีไฟล์ Workflow `.github/workflows/deploy-cloudflare.yml` เตรียมไว้พร้อมแล้ว

### ขั้นตอนการผูก Secrets:
1. ไปที่ Cloudflare Dashboard > **My Profile** > **API Tokens** > กด **Create Token** > เลือก Template **Edit Cloudflare Workers/Pages**
2. ไปที่ GitHub Repository ของคุณ > **Settings** > **Secrets and variables** > **Actions** > กด **New repository secret**
3. เพิ่ม 2 ค่าดังนี้:
   * `CLOUDFLARE_API_TOKEN`: ใส่ Token ที่สร้างจาก Cloudflare
   * `CLOUDFLARE_ACCOUNT_ID`: ใส่ Account ID ของ Cloudflare (ดูได้ที่หน้า Overview ของ Dashboard)
4. เมื่อใดก็ตามที่มีการ `git push` เข้าสู่ branch `main` ระบบ GitHub Actions จะรันขั้นตอน Typecheck, Build และสั่ง Deploy สู่ Cloudflare Pages โดยอัตโนมัติ

---

## วิธีที่ 3: Deploy ตรงจากเครื่องด้วย Wrangler CLI

หากต้องการ Deploy ทดสอบจาก Command Line ของคุณโดยตรง:
```bash
# 1. Login Cloudflare
npx wrangler login

# 2. Build และ Deploy
npm run build
npm run deploy
```
