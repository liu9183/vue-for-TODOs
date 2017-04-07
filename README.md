## vue for TODOs

> effect

![](http://i.imgur.com/L62JFas.png) 

# demourl

[http://www.liu716.xyz/vue-todos-dist/index.html](http://www.liu716.xyz/vue-todos-dist/index.html)


# Introduction 

 -  输入框输入内容后+enter实现新建条目，每个条目设有“选中”和“删除”

 -  输入框左侧有“全部选中”和“全部取消选中”切换按钮

 -  最后一栏左侧显示未选中的条目数量

 -  最后一栏中间部分的“All”，“Active”，“Completed”对应显示“所有条目”，“活跃条目（未选中条目）”，“已完成条目（选中条目）”

 -  最后一栏右侧“Clear completed”可删除所有已完成条目

 -  每个条目单独双击编辑
    
  
       1.@blur失去焦点——自动更新为编辑后的内容

       2.@keyup.esc——自动恢复到未编辑前的内容

       3.@keyup.enter——更新为编辑后的内容
  