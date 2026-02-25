FROM node:20-alpine

# ติดตั้งตัวช่วยสำหรับรัน TypeScript ในโหมดพัฒนา (ถ้ายังไม่มีใน package.json)
# RUN npm install -g ts-node-dev typescript

WORKDIR /app

# ใช้ประโยชน์จาก Layer Caching ของ Docker
COPY package*.json ./
RUN npm install

# ก๊อปปี้โค้ดทั้งหมด
COPY . .

# เปิดพอร์ตให้ตรงกับที่ตั้งไว้ใน .env (เช่น 5000)
EXPOSE 5000

# รันด้วยคำสั่ง dev (ที่มี ts-node-dev หรือ nodemon อยู่ข้างใน)
CMD ["npm", "run", "dev"]

# --- Stage 1: Build ---
# FROM node:20-alpine AS builder
# WORKDIR /app
# COPY package*.json ./
# # ใช้ npm ci แทน install เพื่อความแม่นยำของ library ตาม lock file
# RUN npm ci 
# COPY . .
# RUN npm run build

# # --- Stage 2: Production ---
# FROM node:20-alpine
# WORKDIR /app
# # ก๊อปปี้เฉพาะไฟล์ที่จำเป็นมาจาก Stage 1
# COPY --from=builder /app/dist ./dist
# COPY --from=builder /app/package*.json ./
# # ติดตั้งเฉพาะ Production Dependencies (ไม่เอาตัวเสริมที่ใช้แค่ตอนเขียนโค้ด)
# RUN npm ci --only=production

# EXPOSE 5000
# CMD ["node", "dist/index.js"]