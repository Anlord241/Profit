package com.bsu.fpmi.ProfitApp;
import com.google.gson.Gson;
import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.*;
import java.io.IOException;

@WebServlet(name = "adsServlet", value = "/ads")
public class AdsServlet extends HttpServlet {
    private AdCollection adCollection;

    @Override
    public void init() throws ServletException {
        adCollection = new AdCollection();
    }

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String id = request.getParameter("id");
        response.setContentType("json");
        response.getWriter().println((new Gson()).toJson(adCollection.get(id)));
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String type = request.getParameter("type");
        switch (type) {
            case "search": {
                int skip = Integer.parseInt(request.getParameter("skip"));
                int top = Integer.parseInt(request.getParameter("top"));

                FilterConfig fc = (new Gson()).fromJson(request.getReader(), FilterConfig.class);
                String sortType = request.getParameter("sortType");
                response.setContentType("json");

                response.getWriter().println((new Gson()).toJson(adCollection.getPage(skip, top, fc, sortType)));
                break;
            }
            case "add": {
                Ad ad = (new Gson()).fromJson(request.getReader(), Ad.class);
                String msg;
                if (adCollection.add(ad)){
                    msg =  "{\"success\" : \"true\"}";
                }
                else{
                    msg =  "{\"success\" : \"false\"}";
                }
                response.setContentType("json");
                response.getWriter().println(msg);
                break;

            }
            case "edit":{
                Ad ad = (new Gson()).fromJson(request.getReader(), Ad.class);
                String id = request.getParameter("id");
                String msg;
                if (adCollection.edit(id, ad)){
                    msg =  "{\"success\" : \"true\"}";
                }
                else{
                    msg =  "{\"success\" : \"false\"}";
                }
                response.setContentType("json");
                response.getWriter().println(msg);
                break;
            }
        }

    }


    protected void doDelete(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String id = request.getParameter("id");
        String msg;


        if (adCollection.remove(id)){
            msg =  "{\"success\" : \"true\"}";
        }
        else{
            msg =  "{\"success\" : \"false\"}";
        }
        response.setContentType("json");
        response.getWriter().println(msg);
    }
}
