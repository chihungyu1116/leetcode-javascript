// http://kubicode.me/2015/07/01/Algorithm/Binary-Search-Tree-2-Double-LinkedList/

// 二叉排序树的中序遍历可以得到它的排序元素，但是，但是“它不能创建任何新的节点，只能调整指针的指向”，所以，直接中序法就不可行了。
// 大致思路是如下的：
// 如果当前根节点的左子树不为空，则
// 递归左子树
// 查找左子树最大的元素
// 将该元素的right指针指向根节点，将根节点的left指针指向该元素
// 如果当前根节点的右子树不为空，则
// 递归右子树
// 查找右子树最小的元素
// 将该元素的left指针指向根节点，将根节点的right指针指向该元素
// 注：tree的left和right结构正好对应list的pre和next结构
//       8    
//     /   \
//    3     10
//  /   \     \
// 1     6     14
//     /  \   /
//    4    7 13 

// 它依次调整的点为：1(l),4(l),7(r),4(r),7(l),13(l),13(r),10(r)
//       8    
//     /   \
//  1-3     10
//     \     \
//     6     14
//     /  \   /
//    4    7 13 
//    1为3左子树的最大点，所以的右指针指向3，3的左指针指向1


//        8    
//     /   \
//  1-3     10
//     \     \
//    4-6     14
//       \   /
//        7 13 

//  4为6的左子树的最大值，所以4的右指针指向6，6左指针4

//       8    
//     /   \
//  1-3     10
//     \     \
//    4-6-7   14
//           /
//          13

//  7为6的右子树的最小值，所以7的左指针指向6，6右指针4

//      8    
//     /   \
//  1-3     10
//     \     \
//      4-6-7 14
//           /
//          13

//  4为3的右子树的最小值，所以4的左指针指向3，3右指针4

//  1-3-4-6-7-8    
//            \
//             10
//              \
//              14
//              /
//             13

// 7为8左子树的最小值，所以7的右指针指向8，8的左指针指向7
// 这样就完成了根节点左边的转换，右边的转换思路一致

/**
 * 查找左子树中最大的节点
 * @param T
 * @return
 */
private static TreeNode findMaxNodeInLeft(TreeNode T)
{
  TreeNode t=T.left;
  if(t!=null)
    while(t.right!=null)
    {
      t=t.right;//因为肯定右子树更加大
    }
  
  return t;
  
}

/**
 * 查找右子树种的最小节点
 * @param T
 * @return
 */
private static TreeNode findMinNodeInRight(TreeNode T)
{
  TreeNode t=T.right;
  if(t!=null)
    while(t.left!=null)
      t=t.left;
  
  return t;
}

/**
 * 二叉排序树转双向链表
 * @param T
 */
public static void convertNode(TreeNode T)
{
  if(T==null)
    return ;
  
  if(T.left!=null)
  {
    convertNode(T.left);
    TreeNode t=findMaxNodeInLeft(T);//左子树中最大的点  它一定是在叶子上面
    t.right=T;//将左子树最小的点连在根节点的左侧
    T.left=t;
    t.parent=null;
  }
  
  if(T.right!=null)
  {
    convertNode(T.right);
    TreeNode t=findMinNodeInRight(T);
    t.left=T;//将右子树最小的点连点根节点的右侧
    T.right=t;
    t.parent=null;
  }
}