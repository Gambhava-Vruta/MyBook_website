import java.io.*;
import java.util.*;

public class Solution {

    public static void main(String[] args) {
        /* Enter your code here. Read input from STDIN. Print output to STDOUT. Your class should be named Solution. */
         String a[]={"my","name","is","vruta","my"};
         
         

    for(int i=0;i<=4;i++){
        for(int j=0;j<=4;j++){
            if(a[i]==a[j]){
                break;
            }
            
            System.out.println(a[i]);
        }
    }
    }
}
