// 题目是给定两个函数， get_files(dir), get_dir(dir) 返回所有内容相同的file，
// 问怎么定义内容相同， 然后用hashing把文件的内容hash成key放在dictionary，最后返回这个dictionary。很快写完code，test case。 小哥follow up说， 如果hashing非常expensive怎么办， 答曰hashing前先check file size，如果文件大小一样，再用hashing判断是不是一样。 小哥点头，又来一个follow up说get_files, get_dir如果expensive怎么办，答曰用parrallel programming （gpu or multi core） 可以优化，小哥点头。迎来第五轮system design的面试官。 

// getDir(dir)
// getFiles(dir)


function findDuplicateFiles(dir) {
  var files = [];
  var queue = [];

  queue.push(dir);

  // get all files
  while(queue.length > 0) {
    var curDir = queue.shift();

    var curFiles = getFiles(curDir);
    var curDirs = getDir(curDir);

    queue.concat(curDirs);
    files.concat(curFiles);
  }
}