-- CreateTable
CREATE TABLE `Movie` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(999) NOT NULL,
    `movie_banner` VARCHAR(191) NULL,
    `description` VARCHAR(191) NOT NULL,
    `director` VARCHAR(191) NOT NULL,
    `producer` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
