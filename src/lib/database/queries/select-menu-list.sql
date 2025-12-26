SELECT
    main.menu_id
    , mst.app_name
    , mst.feature_name
    , mst.origin
    , mst.path
    , main.description
    , main.image_name
    , main.category_type
    , main.sort_order
FROM 
    web_toolkit.mst_menu AS main
INNER JOIN
    global_mst.mst_menu AS mst
    ON main.global_menu_id = mst.menu_id
ORDER BY
    main.category_type, main.sort_order
