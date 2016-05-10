#Problem with this is that it needs lots of installed stuff, so I'll put it here 
# sudo or admin shell is presupposed
apt-get install make curl python-setuptools gcc g++
#Maybe you can safely supress make and gcc from here, since they are dependencies of g++

#Then you can proceed to the original set
echo 'export PATH=$HOME/local/bin:$PATH' >> ~/.bashrc
. ~/.bashrc
mkdir /usr/local
mkdir ~/node-latest-install
cd ~/node-latest-install
curl http://nodejs.org/dist/node-latest.tar.gz | tar xz --strip-components=1
./configure --prefix=/usr/local
make install # ok, fine, this step probably takes more than 30 seconds...
curl https://npmjs.org/install.sh | sh
