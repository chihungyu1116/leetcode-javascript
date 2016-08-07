解这个平面几何题有3个要点：

1. 如何判断共线?
两点成一直线，所以两点没有共线不共线之说。对于点p1(x1, y1)，p2(x2, y2)，p3(x3, y3)来说，共线的条件是p1-p2连线的斜率与p1-p3连线的斜率相同，即
(y2-y1)/(x2-x1) = (y3-y1)/(x3-x1)
所以对共线的n点，其中任意两点连线的斜率相同。

2. 如何判断最多的共线点?
对于每个点p出发，计算该点到所有其他点qi的斜率，对每个斜率统计有多少个点符合。其中最多的个数加1（出发点本身）即为最多的共线点。

3. 特殊情况
当x1 = x2，y1!=y2时，为垂直连线。计算斜率时分母为0会出错。
当x1 = x2，y1 = y2时，两点重合。则(x2, y2)和所有(x1, y1)的连线共线。


 1
 2
 3
 4
 5
 6
 7
 8
 9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
class Solution {
public:
    int maxPoints(vector<Point> &points) {
        int maxPts = 0;
        for(int i=0; i<points.size(); i++) {
            int nMax = 0, nSame = 0, nInf = 0;
            unordered_map<float,int> comSlopes;
            
            for(int j=i+1; j<points.size(); j++) {
                if(points[j].x==points[i].x) {
                    if(points[j].y==points[i].y)
                        nSame++;
                    else
                        nInf++;
                    continue;
                }
                float slope = (float)(points[j].y-points[i].y)/(float)(points[j].x-points[i].x);
                comSlopes[slope]++;
                nMax = max(nMax, comSlopes[slope]);
            }
            
            nMax = max(nMax, nInf)+nSame+1;
            maxPts = max(maxPts,nMax);
        }
        return maxPts;
    }
};
