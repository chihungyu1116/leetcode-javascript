// parse log。
// log是指进程运行的记录。一个进程有一个jobname。由于可以并行多次执行
// 一个jobname下可以有多个jobid。每个jobid会有一个endtime。
// 函数，print out 前k个运行时间最长的进程的jobname和对应的最长endtime。


// jobname, jobid, endtime

// hash1: jobname->endtime:
//   store the longest endtime for that job
// hash2: jobid->jobname 
//   not sure what it's for

// use min heap to store the top k longest running one



