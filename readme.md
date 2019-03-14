===================
Installation
==================
package.json
mongodb
express

mongodb Installation
Now, in order to get it working you'll need to run the following commands (prefer a video? see here):
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 2930ADAE8CAF5059EE73BB4B58712A2291FA4AD5
echo "deb [ arch=amd64 ] https://repo.mongodb.org/apt/ubuntu trusty/mongodb-org/3.6 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.6.list
sudo apt-get update
sudo apt-get install -y mongodb-org
You should now have mongo 3.6.2 or newer, you can double check with mongo --version 
Now type cd in the terminal and hit enter to go into the root directory ~
Enter the following:
mkdir data
echo "mongod --dbpath=data --nojournal" > mongod
chmod a+x mongod
Now, in order to run mongod you'll first need to cd into root ~ then run ./mongod 
