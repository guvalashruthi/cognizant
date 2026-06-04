import java.util.concurrent.*;

public class task41 {

    public static void main(String[] args)
            throws Exception {

        ExecutorService executor =
                Executors.newFixedThreadPool(3);

        Callable<Integer> task1 =
                () -> 10 + 20;

        Callable<Integer> task2 =
                () -> 50 + 30;

        Future<Integer> result1 =
                executor.submit(task1);

        Future<Integer> result2 =
                executor.submit(task2);

        System.out.println(
                result1.get());

        System.out.println(
                result2.get());

        executor.shutdown();
    }
}