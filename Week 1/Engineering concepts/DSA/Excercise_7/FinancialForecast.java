public class FinancialForecast {
    public static double forecast(double currentValue,
                                  double growthRate,
                                  int years) {
        if (years == 0) {
            return currentValue;
        }
        return forecast(currentValue, growthRate, years - 1)
                * (1 + growthRate);
    }

    public static void main(String[] args) {
        double presentValue = 10000;
        double growthRate = 0.10;
        int years = 3;
        double futureValue =
                forecast(presentValue, growthRate, years);
        System.out.printf(
                "Predicted value after %d years = %.2f%n",
                years,
                futureValue);
        System.out.println("Time Complexity: O(n)");
        System.out.println("Space Complexity: O(n)");
    }
}