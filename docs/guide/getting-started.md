# 快速开始

欢迎加入 D-Cloud Minecraft 生存服务器!本指南将帮助你快速了解服务器并开始游戏。

## 服务器信息

- **服务器地址**: <span class="copy-inline" data-copy="dc.zhrhello.top" title="点击复制">`dc.zhrhello.top`</span>
- **服务器主版本**: 1.21.8
- **支持版本**: 1.8 - 最新版本
- **推荐版本**: 1.20 及以上
- **游戏模式**: 纯净生存
- **最大在线**: 50人

## 第一次进入服务器

### 1. 连接服务器

在Minecraft主菜单中选择 **多人游戏** -> **添加服务器**,输入服务器地址 <span class="copy-inline" data-copy="dc.zhrhello.top" title="点击复制">`dc.zhrhello.top`</span> 后连接。

### 2. 注册账号

首次进入服务器时,你需要注册账号:

```
/register <密码> <确认密码>
```

例如:
```
/register MyPassword123 MyPassword123
```
!!! warning 警告！
    安全起见，建议您的密码不少于8位，且其中包含
    - 数字
    - 大小写字母
    - 特殊符号
    
### 3. 登录账号

注册后,每次进入服务器需要登录:

```
/login <密码>
```

### 4. 设置出生点

完成注册后,你会被传送到服务器主广场。在这里你可以:

- 查看服务器公告
- 使用传送命令前往各个区域
- 与其他玩家交流

## 基础操作

### 领地系统

保护你的建筑免受他人破坏:

```
/res create <领地名称>          # 创建领地
/res add <玩家名>              # 添加信任玩家
/res remove <玩家名>           # 移除信任玩家
/res delete <领地名称>         # 删除领地
```

### 经济系统

服务器提供基础经济功能:

```
/balance                      # 查看余额
/pay <玩家名> <金额>          # 转账给其他玩家
/money top                    # 查看财富排行
```

### 传送功能

```
/spawn                       # 返回主广场
/home set <名称>             # 设置家
/home <名称>                 # 传送回家
/tpa <玩家名>                # 请求传送到玩家
/tpaccept                    # 接受传送请求
```

## 下一步

- 阅读 [服务器特色](/guide/features) 了解更多玩法
- 查看 [服务器规则](/rules/main-rules) 避免违规
- 学习 [基础命令](/guide/commands) 掌握更多功能
