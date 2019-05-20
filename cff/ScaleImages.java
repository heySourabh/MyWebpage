import java.awt.Graphics2D;
import java.awt.Image;
import java.awt.geom.AffineTransform;
import java.awt.image.BufferedImage;
import java.io.File;
import java.util.Arrays;

import javax.imageio.ImageIO;

public class ScaleImages {
    private static int scaledWidth = 150;

    public static void main(String[] args) throws Exception {

        File inputFolder = new File("chap06/images/");
        File[] inputFiles = inputFolder
                .listFiles(file -> file.getName().endsWith(".png") && file.getName().startsWith("q"));

        for (File input : inputFiles) {
            BufferedImage img = scale(input);

            File output = new File(input.getParent(), "ed_" + input.getName());
            ImageIO.write(img, "PNG", output);
        }

    }

    private static BufferedImage scale(File imageFile) throws Exception {
        System.out.println(imageFile.getAbsolutePath());
        BufferedImage originalImage = ImageIO.read(imageFile);
        int originalWidth = originalImage.getWidth();
        int originalHeight = originalImage.getHeight();
        System.out.println("Original size: " + originalWidth + " x " + originalHeight);
        double scaleFactor = (1.0 * scaledWidth) / originalWidth;
        int scaledHeight = (int) Math.round(scaleFactor * originalHeight);
        System.out.println("Scaled size: " + scaledWidth + " x " + scaledHeight);

        BufferedImage scaledImage = new BufferedImage(scaledWidth, scaledHeight, BufferedImage.TYPE_INT_ARGB);
        scaledImage.createGraphics().drawImage(
                originalImage.getScaledInstance(scaledWidth, scaledHeight, BufferedImage.SCALE_SMOOTH), 0, 0, null);

        return scaledImage;
    }
}
