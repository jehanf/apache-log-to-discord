# apache-log-to-discord

### Installation
1. `git clone git@github.com:jehanf/log-apache-to-discord.git`
2. `cd log-apache-to-discord`
3. `npm install`

### Usage  
```node index.js /path/to/logfile.log https://discord/webhook/url```

### Launch in Background
Make `tail.sh` executable  
`sudo chomod +x /path/to/apache-log-to-discord/tail.sh`  

Then :  
`nohup /path/to/apache-log-to-discord/tail.sh /path/to/apache-log-to-discord/index.js "/path/to/logfile.log" "https://discord/webhook/url" > /dev/null 2>&1 &`

### Autostart on reboot

Make `tail.sh` executable  
`sudo chomod +x /path/to/apache-log-to-discord/tail.sh`  

Then :  
1. `crontab -e`
2. Add `@reboot /path/to/apache-log-to-discord/tail.sh /path/to/apache-log-to-discord/index.js "/path/to/logfile.log" "https://discord/webhook/url"`
3. Repeat 1 and 2 for each log you want to add
