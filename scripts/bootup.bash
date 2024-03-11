echo "Starting application..."
echo "Running backend..."
cd ./backend && yarn install && yarn build && yarn start
echo "Backend running..."

echo "Starting frontend..."
cd ../frontend && yarn install && yarn start