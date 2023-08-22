# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [0.1.0](https://github.com/everiary/backend/compare/v0.0.5...v0.1.0) (2023-08-22)

### [0.0.5](https://github.com/everiary/backend/compare/v0.0.4...v0.0.5) (2023-08-22)


### 🐛 Bug Fixes | Bug 修复

* 修复了路径冲突导致get(/ever/random)报错的问题，将其改回get，同时优化了timestamp的逻辑。 ([560be2c](https://github.com/everiary/backend/commit/560be2cd15f2b9828bcf8a927784a59b06b40a80))
* 修正了’时差‘，现在是强制使用GMT+8的时间戳。 ([5df2925](https://github.com/everiary/backend/commit/5df2925639f8579a9290ce38925ee89aed5a5206))


### ✨ Features | 新功能

* 初步实现格式化输出 ([c55d4c7](https://github.com/everiary/backend/commit/c55d4c7e90279ca4fb626583c43ea11919346b2c))
* 初步实现异常拦截 ([ee67ae2](https://github.com/everiary/backend/commit/ee67ae2000f600b3b41570da27465b65f83ad9ac))

### [0.0.4](https://github.com/everiary/backend/compare/v0.0.3...v0.0.4) (2023-08-11)


### ✨ Features | 新功能

* 新增了create_at与update_at字段，但是存在Bug，并且因为修改了ever.dto导致无法使用getRandom方法 ([0331f95](https://github.com/everiary/backend/commit/0331f95ca5e004b9b1c05c6ffdb58f2f6a33ef40))
* 新增随机获取everiary接口 ([280fa11](https://github.com/everiary/backend/commit/280fa11f3bc16c5c7d4a5635718926309dfc6543))

### [0.0.3](https://github.com/everiary/backend/compare/v0.0.2...v0.0.3) (2023-08-10)


### 💄 Styles | 风格

* 接入swagger及git规范 ([7692ef6](https://github.com/everiary/backend/commit/7692ef6b4229dd9d4d8e4370f71a4514cb5c7e7d))


### ✏️ Documentation | 文档

* 部分修改了README ([42a3f53](https://github.com/everiary/backend/commit/42a3f534188c901749783a9a8d4de5ced80d4ae5))
* 修改package.json ([dd7e625](https://github.com/everiary/backend/commit/dd7e625a48b7816f4273bcc19241db76789ca093))


### 🐛 Bug Fixes | Bug 修复

* 更改了查询的逻辑，改用_id主键查询 ([6699dda](https://github.com/everiary/backend/commit/6699ddaa638e6b27b1750e936a276f4191417f67))


### 👻 Hard to Explain | 杂项

* 添加gitee源 ([c020cd5](https://github.com/everiary/backend/commit/c020cd5fe7945c8cce30f4ee0b3d8666d48689fb))

### 0.0.2 (2023-08-04)
