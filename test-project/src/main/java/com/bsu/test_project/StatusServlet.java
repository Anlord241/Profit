package com.bsu.test_project;

import java.io.*;
import javax.servlet.http.*;
import javax.servlet.annotation.*;

@WebServlet(name = "statusServlet", value = "/status")
public class StatusServlet extends HttpServlet {
    private String message;

    public void init() {
        message = "The application is running";
    }

    public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
        response.setContentType("text/html");

        PrintWriter out = response.getWriter();
        out.println("<html><body>");
        out.println("<h1 style = 'color: red'>" + message + "</h1>");
        out.println("</body></html>");
    }

    public void destroy() {
    }
}