SELECT
    main.id
    , mst.app_name
    , mst.feature_name
    , mst.origin
    , mst.path
    , main.description
    , main.program_id
    , main.location_no
    , main.sort_order
FROM webtoolkit.mst_menu AS main
INNER JOIN global_mst.mst_menu AS mst
    ON main.global_menu_id = mst.id
ORDER BY main.location_no, main.sort_order