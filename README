# Installations:

1. We use Node.js as our runtime. Install Node.js for Ubuntu: 

```
# installs nvm (Node Version Manager)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash

# download and install Node.js (you may need to restart the terminal)
nvm install 22

# verifies the right Node.js version is in the environment
node -v # should print `v22.4.0`

# verifies the right NPM version is in the environment
npm -v # should print `10.8.1`
```
2. We use MongoDB as our database. Install MongoDB for Ubuntu:

```
# Check your Ubuntu version
cat /etc/lsb-release

# Install GnuPG and Curl
sudo apt-get install gnupg curl

# Import the MongoDB public GPG key
curl -fsSL https://www.mongodb.org/static/pgp/server-7.0.asc | \
   sudo gpg -o /usr/share/keyrings/mongodb-server-7.0.gpg \
   --dearmor

# You should be on Ubuntu 22.04. Run this to create the list file
echo "deb [ arch=amd64,arm64 signed-by=/usr/share/keyrings/mongodb-server-7.0.gpg ] https://repo.mongodb.org/apt/ubuntu jammy/mongodb-org/7.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-7.0.list

# Update your packages
sudo apt-get update

# Install MongoDB
sudo apt-get install -y mongodb-org

# (Optional) Prevent unintended upgrades for the future
echo "mongodb-org hold" | sudo dpkg --set-selections
echo "mongodb-org-database hold" | sudo dpkg --set-selections
echo "mongodb-org-server hold" | sudo dpkg --set-selections
echo "mongodb-mongosh hold" | sudo dpkg --set-selections
echo "mongodb-org-mongos hold" | sudo dpkg --set-selections
echo "mongodb-org-tools hold" | sudo dpkg --set-selections
```

# Setup

In your terminal, run `npm init -y`, then run `node src/app.js`. This will run the application locally.

Open another terminal without closing the one you just made. Then run `mongod`. This will run MongoDB.