package com.bsu.fpmi.ProfitApp;

import javax.servlet.ServletException;
import javax.servlet.http.*;
import javax.servlet.annotation.*;
import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Files;
import java.nio.file.StandardCopyOption;
import java.util.Collection;



@WebServlet(name = "uploadServlet", value = "/upload")
@MultipartConfig
public class UploadServlet extends HttpServlet {

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {
        Collection<Part> parts = request.getParts();
        System.out.println(parts);
        String msg;
        for (Part part : parts) {
            if (part.getContentType()!=null) {
                if (part.getContentType().matches("image/jpeg")) {
                    String contentType = part.getContentType();
                    System.out.println("contentType = " + contentType);

                    System.out.println("file = " + part.getSubmittedFileName());

                    InputStream stream = part.getInputStream();
                    String content = stream.toString();
                    System.out.println("content = " + content);


                    File dir = new File("C:\\ProfitPhotos");
                    if (!dir.exists()) {
                        dir.mkdir();
                    }

                    File file = new File("C:\\ProfitPhotos", part.getSubmittedFileName());

                    try (InputStream is = part.getInputStream()) {
                        Files.copy(is, file.toPath(), StandardCopyOption.REPLACE_EXISTING);
                        msg = "{\"success\" : \"true\"}";
                        response.setContentType("json");
                        response.getWriter().println(msg);
                    }
                }
            }
        }
    }
}
