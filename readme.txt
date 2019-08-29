1) write a trivial node webserver that tells a dirty joke on GET /
2) create a dockerfile
3) make the dockerfile install node
4) lodge the thing from #1 in github, then in npm
5) pull it from npm in the dockerfile
6) open the relevant port on the docker image so network traffic can flow
ive never pulled something from github to be used in a container

7) have the server start itself when the docker image starts.
we'll use npm instead but it'll be obvious how after
docker is basically just a weird shell notation honestly
once you notice that you're golden
lol yah the docker files are interesting

it's autoexec.bat.wtf
and the 'subcontainers' you use to build your eventual end continer
container
of course my dockers aren't linux docker

yeah i mostly ignore those
that's way more effort than i give a shit about
advanced programmer skill: knowing what not to give a fuck about
yah thats more for deploying websites
<3

ok ready?
this should take 45-1:15 i think, we'll find out
longer if we have to create accounts.  do you have an npm account?
noes
loool
and im buzzed

ok it's free let's start there
ok

https://www.npmjs.com/signup
npm
npmjs.com
do you know about npm already?
not too much
i needed some things to get my website to work

have you ever used a language with a package manager before?
like libraries but nuget

oh yeah basically.
it's nuget for libraries, that's pretty much the thing, ya.
plus a little batch scripter.
and bowser but im a bitch and let vs do most of it
joining.. sec

irc time?
facebook is not-plus for long code talk
let me see
wow i haven't put up irc in a long time. let me verify email
ok in npm now
let me see if i even have irc on this thing
its a new dev box
boo no lol

(dramatic gasp)
installing irc i knoww!!
omg i need to be identified for freenode LOOOl

/join #erlang
it is +r
LOOL

no.
im on freenode.org
what should I be on

irc.blitzed.org
shiiit

HIDDEN
woiw thats record timing lol
but yah
Chat Conversation End
Type a message...

======
in git repository on command line
npm init
then return through all the questions

WHAT IS NPM
node is jsut a js script runner, a module sysatem and some standar dlibraries that mimic the c standard libraries

so you can do something like
console.log( require('fs').read_file_sync('c:\\whatever.file').split('\n').reverse().join('\n') );
===
from c:\dev\webprojects\justsaying\justsaying
run
npm install --save-dev express

installs webserver






