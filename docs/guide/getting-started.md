# 快速开始

欢迎加入 D-Cloud Minecraft 生存服务器!本指南将帮助你快速了解服务器并开始游戏。

## 服务器信息

- **服务器地址**: <span class="copy-inline" data-copy="dc.zhrhello.top" title="点击复制">`dc.zhrhello.top`</span>
- **备用地址**:
  - <span class="copy-inline" data-copy="vip.bj.frp.one:16113" title="点击复制">`vip.bj.frp.one:16113`</span>
  - <span class="copy-inline" data-copy="cn.gz.alichenserver.hayfrp.qzz.io:12308" title="点击复制">`cn.gz.alichenserver.hayfrp.qzz.io:12308`</span>
  - <span class="copy-inline" data-copy="zz.frp.one:37351" title="点击复制">`zz.frp.one:37351`</span>
- **服务器主版本**: 26.1.2
- **支持版本**: 1.8 - 最新版本
- **推荐版本**: 26.1.2
- **游戏模式**: 纯净生存
- **最大在线**: 50人

## 第一次进入服务器

### 1. 连接服务器

在Minecraft主菜单中选择 **多人游戏** -> **添加服务器**,输入服务器地址 <span class="copy-inline" data-copy="dc.zhrhello.top" title="点击复制">`dc.zhrhello.top`</span> 后连接。

如果主地址无法连接，可以尝试使用备用地址。

### 2. 注册账号

首次进入服务器时,你需要注册账号:

```
/reg <密码> <确认密码>
```

例如:
```
/reg 123456 123456
```

![注册示例](/start/reg.png)

::: warning 警告！
安全起见，建议您的密码不少于8位，且其中包含
- 数字
- 大小写字母
- 特殊符号
:::
    
### 3. 登录账号

注册后,每次进入服务器需要登录:

```
/l <密码>
```

![登录示例](/start/login.png)

### 4. 进入生存区

在主城找到切换生存区服NPC，右键打开换服菜单，点击一个想去的区服即可切换。

![切换生存区服NPC](/npcs/scmenu.png)

![换服菜单](/menus/scmenu.png)

## 正版验证（/premium）

如果你是 **正版（Premium）Minecraft 玩家**，进服后可在主城输入以下指令开启正版验证：

```
/premium
```

开启成功后，系统会将你的账号与正版 UUID 绑定，**之后进入服务器将不再需要输入密码**，直接使用正版会话进服即可。

::: warning 警告
**非正版（离线 / 破解）玩家请勿使用 `/premium` 指令！**

正版验证要求使用官方账号会话（正版 UUID）登录。非正版玩家一旦开启，会卡在「无效会话（Invalid Session）」错误，导致 **无法进入服务器**。

出现此类问题视为玩家自行操作导致，后果由本人承担，服务器不提供找回 / 解除服务。
:::

> 客户端版本说明：服务器当前为 26.1.2 版本，使用旧版客户端（1.8 – 最新版本）仍可正常加入，无需强制升级。

## 网络要求

- 稳定的网络连接
- 延迟建议低于 100ms
- 无代理或VPN(可能被反作弊系统误判)

## 常见问题

### Q: 无法连接服务器怎么办?

- 检查网络连接
- 确认Minecraft版本正确
- 尝试备用地址
- 加入QQ群查看服务器是否在维护

### Q: 忘记密码怎么办?

联系QQ管理员，提供IP地址等验证信息进行找回。

### Q: 服务器支持Java版还是基岩版?

目前仅支持Java版，暂不支持基岩版。

### Q: 需要正版账号吗?

服务器不需要正版Minecraft账号。

## 下一步

- 查看 [服务器规则](/rules/main-rules) 避免违规
- 学习 [基础命令](/guide/commands) 掌握更多功能
