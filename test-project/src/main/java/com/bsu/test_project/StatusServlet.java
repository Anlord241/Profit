package com.bsu.test_project;

import java.io.*;
import javax.servlet.http.*;
import javax.servlet.annotation.*;

@WebServlet(name = "statusServlet", value = "/status")
public class StatusServlet extends HttpServlet {
    private static final String MESSAGE = "The application is running";

    public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
        response.setContentType("text/html");

        PrintWriter out = response.getWriter();
        out.println("<html><body>");
        out.println("<h1 style = 'color: red'>" + MESSAGE + "</h1>");
        out.println("</body></html>");
    }

    public void destroy() {
    }
}