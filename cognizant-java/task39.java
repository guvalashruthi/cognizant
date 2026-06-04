import java.lang.reflect.*;

public class task39 {

    public void greet() {

        System.out.println("Hello");
    }

    public static void main(String[] args)
            throws Exception {

        Class<?> cls =
                Class.forName("ReflectionDemo");

        Method[] methods =
                cls.getDeclaredMethods();

        for(Method m : methods) {

            System.out.println(
                    "Method: " + m.getName());
        }

        Object obj =
                cls.getDeclaredConstructor()
                        .newInstance();

        Method method =
                cls.getDeclaredMethod("greet");

        method.invoke(obj);
    }
}