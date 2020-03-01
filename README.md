# Snippets

Personal Code Snippets
## Title 2
    var test = 'yo bitch';

## Install SSH Key on Server
    ssh-copy-id pi@10.40.7.142

## SCP Upload
    scp -r build pi@10.40.7.142:/opt/apps/evolve-ss

## SCP Download
    scp -r pi@10.40.7.142:~ /Users/razinger/Downloads

## Daemonix Logs
    var test = 'yo bitch';

## Mac Host File
    sudo nano /etc/hosts

## Remove .DS_Store
    find . -name '.DS_Store' -type f -delete

## Regex Parse - In Between 2 Characters
    (\{.*\})

## Query Shortcuts
    --Alt+F1, sp_help
    --Crtl+3, select top 500 * from
    --Crtl+4, select count(1) from
    --Ctrl+5, use ultrawarehouse; select (select top 1 datetime_added as refresh_point from ultrawarehouse.dbo.fulfillment (nolock) order by fulfillment_id desc) as WMS_refresh_point, (select lower(@@servername)) as server_name, (select db_name()) as dbname;
    --Crtl+6, use ultramerchant; select (select top 1 datetime_added as refresh_point from ultramerchant.dbo.[order] (nolock) order by order_id desc) as ECOM_refresh_point, (select lower(@@servername)) as server_name, (select db_name()) as dbname;
    --Crtl+7, use JF_Portal;
    --Crtl+8, use tempdb;
    --Crtl+9, select
    --Crtl+0, select (select top 1 datetime_added as refresh_point from ultrawarehouse.dbo.fulfillment (nolock) order by fulfillment_id desc) as WMS_refresh_point, (select top 1 datetime_added as refresh_point from ultramerchant.dbo.[order] (nolock) order by order_id desc) as ECOM_refresh_point, (select lower(@@servername)) as server_name, (select db_name()) as dbname;


## Add Spacer to Dock
	defaults write com.apple.dock persistent-apps -array-add '{"tile-type"="spacer-tile";}'
       
## Show/Hide Hidden Files
    defaults write com.apple.finder AppleShowAllFiles YES

## Grant Script Permissions
    chmod u+x /Users/razinger/Desktop/MyDev/Planner/ConnectToServer.command