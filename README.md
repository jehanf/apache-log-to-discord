# apache-log-to-discord

### Installation
`git clone git@github.com:jehanf/log-apache-to-discord.git`

### Usage  
```node index.js /path/to/logfile.log https://discord/webhook/url```

### Launch in Background
`nohup /path/to/apache-log-to-discord/tail.sh /path/to/apache-log-to-discord/index.js "/path/to/logfile.log" "https://discord/webhook/url" > /dev/null 2>&1 &`

### Autostart on reboot
1. `crontab -e`
2. Add `@reboot /path/to/apache-log-to-discord/tail.sh /path/to/apache-log-to-discord/index.js "/path/to/logfile.log" "https://discord/webhook/url"`
3. Repeat 1 and 2 for each log you want to add
