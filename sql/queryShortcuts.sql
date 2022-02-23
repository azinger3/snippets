    --Alt+F1, 
    sp_help

    --Crtl+3, 
    select top 500 * from

    --Crtl+4, 
    select count(1) from

    --Ctrl+5, 
    use ultrawarehouse; select (select top 1 datetime_added as refresh_point from ultrawarehouse.dbo.fulfillment (nolock) order by fulfillment_id desc) as WMS_refresh_point, (select lower(@@servername)) as server_name, (select db_name()) as dbname;
    
    --Crtl+6, 
    use ultramerchant; select (select top 1 datetime_added as refresh_point from ultramerchant.dbo.[order] (nolock) order by order_id desc) as ECOM_refresh_point, (select lower(@@servername)) as server_name, (select db_name()) as dbname;
    
    --Crtl+7, 
    use JF_Portal; select (select top 1 DateCreate as refresh_point from JF_Portal.dbo.PoHdr (nolock) order by PoId desc) as JF_Portal_refresh_point, (select lower(@@servername)) as server_name, (select db_name()) as dbname;
    
    --Crtl+8, 
    use tempdb;
    
    --Crtl+9, 
    select
    
    --Crtl+0, 
    select (select top 1 datetime_added as refresh_point from ultrawarehouse.dbo.fulfillment (nolock) order by fulfillment_id desc) as WMS_refresh_point, (select top 1 datetime_added as refresh_point from ultramerchant.dbo.[order] (nolock) order by order_id desc) as ECOM_refresh_point, (select lower(@@servername)) as server_name, (select db_name()) as dbname;