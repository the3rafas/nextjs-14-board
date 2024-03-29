cd ~/panel
git pull origin master
pnpm install
pnpm run build
pm2 restart panels