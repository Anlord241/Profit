package com.bsu.test_project;

import javax.servlet.http.*;
import javax.servlet.annotation.*;
import java.io.IOException;
import java.io.PrintWriter;

@WebServlet(name = "getServlet", value = "/get")
public class GetServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
        String name = request.getParameter("name");
        PrintWriter out = response.getWriter();
        try {
            if (name.length() > 100) {
                throw new IllegalArgumentException();
            }
            out.println("<html><body>");
            out.println("<h1> Name is " + name + "</h1>");
            out.println("</body></html>");

        }
        catch (IllegalArgumentException e) {
            out.println("<html><body>");
            out.println("<h1 style = 'color: red'> The name parameter is too long! </h1>");
            out.println("</body></html>");
        }
    }
}
