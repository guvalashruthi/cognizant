import java.util.Scanner;

public class task14 {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        System.out.print("Number of Elements: ");
        int n = sc.nextInt();

        int arr[] = new int[n];

        int sum = 0;

        for(int i=0;i<n;i++){
            arr[i] = sc.nextInt();
            sum += arr[i];
        }

        double avg = (double)sum/n;

        System.out.println("Sum = " + sum);
        System.out.println("Average = " + avg);
    }
}