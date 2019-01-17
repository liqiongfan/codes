# Git 操作

### 1. 拉取代码
```
git clone github.com/liqiongfan/xaop.git
```

### 2. 基于某一个分支(release)，新建分支
```
git checkout -b ljg/fixbug origin release
```

### 3. 添加文件到缓存区
```
git add a.x b.x
or
git add .
```

### 4. 从缓存区提交分支树
```
git commit -m 'xxx'
```

### 5. 推送至远程分支
```
git push origin fixbug
```

### 6. 合并某一个分支到当前分支
```
git merge fixbug
```

### 7. 放弃当前的修改
```
git checkout -- .
```

### 8. 暂存当前的修改
```
git stash
```

### 9. 将暂存的修改取出
```
git stash pop
```

### 10. 使用某一个分支的代码覆盖当前的文件
```
git checkout origin/branch a.x
```

### 11. 查看远程分支
```
git branch -r
```

### 12. 查看所有分支
```
git branch -a
```

### 13. 查看当前的分支
```
git branch
```

### 14. 变基
```
git rebase -i master
```

































































