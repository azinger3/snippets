    --Alt+F1, 
    sp_help

    --Crtl+3, 
    select top 500 * from

    --Crtl+4, 
    select count(1) from

    --Ctrl+5, 
    use db; select (select top 1 last_insert_date as refresh_point from db.schema.table (nolock) order by key_id desc) as refresh_point, (select lower(@@servername)) as server_name, (select db_name()) as dbname;
    
    --Crtl+6, 
    
    --Crtl+7, 
    
    --Crtl+8, 
    use tempdb;
    
    --Crtl+9, 
    select
    
    --Crtl+0, 
