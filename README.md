# XBB FORM组件库

## 安装依赖
```sh
lerna bootstrap
```

## play
本地测试服务
```sh
cd play
npm install
npm run serve
```

### 单个包 build
```sh
# ./node_modules/.bin/lerna run build --scope @saiyanjing/xbb-form
lerna run build --scope @saiyanjing/xbb-form
```
### 包互相依赖
```sh
lerna add @tuya-fe/iot-i18n --scope=@tuya-fe/iot-select-card --peer
```

## 发布

```sh
# npx lerna publish
./node_modules/.bin/lerna publish

# 发布alpha版本，可以手动指定版本
lerna publish --dist-tag=alpha

# 不推荐使用
# 发布alpha版本，preid指定后缀为alpha
# prepatch：直接升级小号，增加预发布号为0
lerna publish prepatch --preid=alpha --dist-tag=alpha

# 推荐使用
# 发布alpha版本，preid指定后缀为alpha
# prerelease
# 如果没有预发布号：增加小号，增加预发布号为0
# 如果有预发布号，则升级预发布号
lerna publish prerelease --preid=alpha --dist-tag=alpha

# 推荐使用
# 发布beta版本，preid指定后缀为beta
# prerelease
# 如果没有预发布号：增加小号，增加预发布号为0
# 如果有预发布号，则升级预发布号
lerna publish prerelease --preid=beta --dist-tag=beta
```
