-- CreateTable
CREATE TABLE `mst_menu` (
    `menu_id` INTEGER NOT NULL,
    `global_menu_id` INTEGER NOT NULL,
    `description` VARCHAR(255) NULL,
    `image_name` VARCHAR(255) NULL,
    `category_type` INTEGER NOT NULL,
    `sort_order` INTEGER NOT NULL,
    `created_at` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updated_at` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`menu_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

