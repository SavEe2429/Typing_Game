FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# เปิดพอร์ตมาตรฐานของ Vite
EXPOSE 5173

# สำคัญ: ต้องใส่ --host เพื่อให้ Docker ยิงพอร์ตออกมาข้างนอกได้
CMD ["npm", "run", "dev", "--", "--host"]
# --- Stage 1: Build ---
# FROM node:20-alpine AS builder
# WORKDIR /app
# COPY package*.json ./
# RUN npm ci
# COPY . .
# RUN npm run build

# # --- Stage 2: Serve with Nginx ---
# FROM nginx:stable-alpine
# # ก๊อปปี้ไฟล์ที่ Build แล้วไปวางในที่ของ Nginx
# COPY --from=builder /app/dist /usr/share/nginx/html
# # (Optional) ถ้ามีไฟล์ nginx config พิเศษให้ copy มาใส่ตรงนี้
# # COPY nginx.conf /etc/nginx/conf.d/default.conf

# EXPOSE 80
# CMD ["nginx", "-g", "daemon off;"]