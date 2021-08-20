# apache-log-to-discord

### How it would look like
![apache-log-to-discord](https://user-images.githubusercontent.com/12374730/130245778-e01187b3-cd29-44f2-9ec2-7b57edd9badf.png)  
The name and icon of the bot are up to you when creating a webhook (Right-click on channel > Edit channel > Integrations).

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
