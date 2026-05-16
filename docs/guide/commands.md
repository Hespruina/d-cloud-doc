# 基础命令

本页面列出服务器常用的基础命令。

## 账号相关

| 命令 | 说明 | 示例 |
|------|------|------|
| `/register <密码>` | 注册账号 | `/register MyPass123` |
| `/login <密码>` | 登录账号 | `/login MyPass123` |
| `/changepassword <旧密码> <新密码>` | 修改密码 | `/changepassword old new` |
| `/email set <邮箱>` | 绑定邮箱 | `/email set example@mail.com` |

## 领地相关

| 命令 | 说明 | 示例 |
|------|------|------|
| `/res create <名称>` | 创建领地 | `/res create myhome` |
| `/res expand <数量>` | 扩展领地 | `/res expand 20` |
| `/res add <玩家>` | 添加信任玩家 | `/res add Steve` |
| `/res remove <玩家>` | 移除信任玩家 | `/res remove Steve` |
| `/res info` | 查看领地信息 | `/res info` |
| `/res delete <名称>` | 删除领地 | `/res delete myhome` |

## 经济相关

| 命令 | 说明 | 示例 |
|------|------|------|
| `/balance` | 查看余额 | `/balance` |
| `/pay <玩家> <金额>` | 转账 | `/pay Steve 100` |
| `/money top` | 财富排行 | `/money top` |
| `/shop create` | 创建商店 | 见商店页面说明 |

## 传送相关

| 命令 | 说明 | 示例 |
|------|------|------|
| `/spawn` | 返回主广场 | `/spawn` |
| `/home set <名称>` | 设置家 | `/home set base` |
| `/home <名称>` | 传送到家 | `/home base` |
| `/tpa <玩家>` | 请求传送 | `/tpa Steve` |
| `/tpaccept` | 接受传送 | `/tpaccept` |
| `/tpdeny` | 拒绝传送 | `/tpdeny` |
| `/back` | 返回上次位置 | `/back` |

## 社交相关

| 命令 | 说明 | 示例 |
|------|------|------|
| `/msg <玩家> <内容>` | 私聊 | `/msg Steve Hello` |
| `/ignore <玩家>` | 屏蔽玩家 | `/ignore Steve` |
| `/unignore <玩家>` | 取消屏蔽 | `/unignore Steve` |
| `/afk` | 设置离开状态 | `/afk` |

## 服务器信息

| 命令 | 说明 | 示例 |
|------|------|------|
| `/list` | 查看在线玩家 | `/list` |
| `/vote` | 投票支持服务器 | `/vote` |
| `/rules` | 查看服务器规则 | `/rules` |
| `/help` | 查看帮助 | `/help` |
| `/ping` | 查看延迟 | `/ping` |

## 提示

- 大多数命令可以通过 `/help <命令>` 查看详细用法
- 命令可以在聊天框中按 `Tab` 键自动补全
- 如果命令不生效,请检查是否有足够权限
