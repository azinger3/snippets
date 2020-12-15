# Snippets

Personal Code Snippets - staging test1

## New jsonrpc method
    Module.prototype.methodName = function (request, response) {
        let self = this;
        let tasks = [];

        // params
        request.setParams(Object.assign({
            lpn: '',
            item: '',
            case: '',
            warehouseid: 0
        }, request.getParams()));

        request.getParams().warehouseid = parseInt(request.getParams().warehouseid);

        // validate
        if (!request.getParams().lpn.trim()) {
            response.addError(500, 'lpn is missing');
        }

        if (!request.getParams().item.trim()) {
            response.addError(500, 'item is missing');
        }

        if (!request.getParams().case.trim()) {
            response.addError(500, 'case is missing');
        }

        if (!request.getParams().warehouseid) {
            response.addError(500, 'warehouseid is missing');
        }

        if (!response.isSuccess()) {
            response.send();
            return;
        }

        tasks.push((done) => { // step 1
            done(null, {
                stub: "stub",
                params: request.getParams()
            })
        });

        async.waterfall(tasks, (err, result) => { // response
            if (err) {
                return response.send(err);
            }

            response.send(result);
        });
    };

## Graylog Searches
    # String
    params:*\"tool\"\:\"po\"*

    # Int/Boolean
    params:*\"typecodeid\"\:267*
    params:*\"iscorrection\"\:false*

## Recompile Stored Procedure
    ssh razinger-a@JFBELSVMLXADM01
    adminrecompile pr_initial_scan_case_order_inventory_V2_sel
	
## Mac Timezone Development Setup
	[11:46 AM] David Brooks
		so i think this "trick" works for all macs, if you work with dates and want to make sure the timezone conversions are "working" as expected, we have a couple different routes
	​[11:46 AM] David Brooks
		a) change your local timezone (PITA)
	​[11:47 AM] David Brooks
		b) build docker and run via docker (all of our docker files set timezone to PST)
	​[11:47 AM] David Brooks
		c) for Macs, set the timezone on the command line: TZ='US/Pacific' node server.js

## Directory File List to Text
    # Windows
    cd C:\MyDoc\Workspace\Projects\Reverse Replen\SQL
    dir *.sql /b > filelist.txt

## Docker Repo Access
    # Login
    docker login https://snpm-docker-qa.techstyle.net

    # Build / Tag
    docker build . -t snpm-docker-qa.techstyle.net/qa/evolve/evolve-fc-fling/feature-wms-6684:latest

    •	Note the path is important as it’ll help organize the location of the images in the repo. It can be whatever we want, but lets follow a guideline when using

    # Push
    docker image push snpm-docker-qa.techstyle.net/qa/evolve/evolve-fc-fling/feature-wms-6684:latest

## Evolve SQL Server DNS
	C:\Windows\system32>setspn -L SVC_SQL_DBP40
		Registered ServicePrincipalNames for CN=SVC_SQL_DBP40,OU=Service Accounts,OU=DB_Ops,OU=Tech_Team_OUs,DC=corp,DC=brandideas,DC=com:
        MSSQLSvc/TFGELSPM16DBP41.corp.brandideas.com
        MSSQLSvc/TFGELSPM16DBP41.corp.brandideas.com:1433
        MSSQLSvc/dyngp.colo.brandideas.com
        MSSQLSvc/dyngp.colo.brandideas.com:1433
        MSSQLSvc/jfbtsnsql52.colo.brandideas.com
        MSSQLSvc/jfbtsnsql52.colo.brandideas.com:1433
        MSSQLSvc/uwserver.colo.brandideas.com:1433
        MSSQLSvc/uwserver.colo.brandideas.com
        MSSQLSvc/TFGELSEVOLVE01.corp.brandideas.com
        MSSQLSvc/TFGELSEVOLVE01.corp.brandideas.com:1433
        MSSQLSvc/TFGELSPM16DBP40.corp.brandideas.com:1433
        MSSQLSvc/TFGELSPM16DBP40.corp.brandideas.com

## cURL - HTTP GET
    curl -k -X GET https://cron-fc.justfab.net/uptime

## cURL - JSON-RPC
    curl -k -H "Content-Type: application/json" -H "x-auth-token: wmssys" -X POST -d '{"jsonrpc": "2.0","method": "fc.pick.getPendingPicks","id": 17,"params": {"warehouseid": 107}}' https://qa1-fc-fling.fc.techstyle.tech/rpc/

## Local FTP
    docker run -p 2222:22 -d atmoz/sftp foo:pass:::EZ_Europe
    docker run -p 2223:22 -d atmoz/sftp foo:pass:::bleckmann

## Download Upload Files
    scp -r razinger-a@jfbelsvmlxnjs13:/opt/apps/evolve-upload-api/tmp /Users/razinger/Downloads

## Copy Files
    sudo cp -r -f ~/apps/evolve-upload-api /opt/apps/

## Install SSH Key on Server
    ssh-copy-id pi@10.40.7.142

## SCP Upload
    scp -r build pi@10.40.7.142:/opt/apps/evolve-ss

## SCP Download
    scp -r pi@10.40.7.142:~ /Users/razinger/Downloads

## View Daemonix Logs
    ssh razinger-a@jfbelsvmlxnjs00
    sudo su
    cd /opt/var/log/qa1-stride
    tail -f app.log

## View EU shipping Logs
    ssh razinger-a@tfgelsvmlxeeu01 -p 2200
    sudo su
    tail -f /var/log/upstart/ezlabel-eu.log

## Download Daemonix Logs
    ssh razinger-a@jfbelsvmlxnjs00
    sudo su
    cd /opt/var/log/qa1-stride
    cp /opt/var/log/qa1-stride/app.log ~/tmp/
    sudo chown razinger-a:domain^users ~/tmp/app.log
    scp -r razinger-a@jfbelsvmlxnjs00:~/tmp/app.log /Users/razinger/Downloads

## Mac Host File
    sudo nano /etc/hosts

## Remove .DS_Store from Directory
    find . -name '.DS_Store' -type f -delete

## Regex Parse - In Between 2 Characters
    (\{.*\})

## Query Shortcuts
    --Alt+F1, sp_help
    --Crtl+3, select top 500 * from
    --Crtl+4, select count(1) from
    --Ctrl+5, use ultrawarehouse; select (select top 1 datetime_added as refresh_point from ultrawarehouse.dbo.fulfillment (nolock) order by fulfillment_id desc) as WMS_refresh_point, (select lower(@@servername)) as server_name, (select db_name()) as dbname;
    --Crtl+6, use ultramerchant; select (select top 1 datetime_added as refresh_point from ultramerchant.dbo.[order] (nolock) order by order_id desc) as ECOM_refresh_point, (select lower(@@servername)) as server_name, (select db_name()) as dbname;
    --Crtl+7, use JF_Portal; select (select top 1 DateCreate as refresh_point from JF_Portal.dbo.PoHdr (nolock) order by PoId desc) as JF_Portal_refresh_point, (select lower(@@servername)) as server_name, (select db_name()) as dbname;
    --Crtl+8, use tempdb;
    --Crtl+9, select
    --Crtl+0, select (select top 1 datetime_added as refresh_point from ultrawarehouse.dbo.fulfillment (nolock) order by fulfillment_id desc) as WMS_refresh_point, (select top 1 datetime_added as refresh_point from ultramerchant.dbo.[order] (nolock) order by order_id desc) as ECOM_refresh_point, (select lower(@@servername)) as server_name, (select db_name()) as dbname;

## Add Spacer to Dock
	defaults write com.apple.dock persistent-apps -array-add '{"tile-type"="spacer-tile";}'
       
## Show/Hide Hidden Files
    defaults write com.apple.finder AppleShowAllFiles YES

## Grant Script Permissions
    chmod u+x /Users/razinger/Desktop/MyDev/Planner/ConnectToServer.command