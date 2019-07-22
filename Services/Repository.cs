using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using Avocet.Ship.Operation.EFModels;
using Microsoft.EntityFrameworkCore;

namespace Avocet.Ship.Operation.Services
{
  public interface IRepository : IDisposable
  {
    IQueryable<T> All<T>() where T : class;
    IQueryable<T> AllIncluding<T>(params Expression<Func<T, object>>[] include) where T : class;
    IQueryable<T> AllSearchBy<T>(params Expression<Func<T, bool>>[] search) where T : class;
    IQueryable<T> SearchByPredicate<T>(Expression<Func<T, bool>> predicate) where T : class;
    IQueryable<T> SearchByPredicateIncludeChildren<T>(Expression<Func<T, bool>> predicate, List<string> children) where T : class;
    void Add<T>(T model) where T : class;
    void Update<T>(T model) where T : class;
    void Remove<T>(T model) where T : class;
    //List<string> GetParseData(string s);
    void GetExecuted(string str);
    //string DataParser(string id, string data, DbContext context = null);
    //string docReport(int id);
    // int? spGenerateOTPPolicy(string userCode, string userType);
  }
  public class Repository : IRepository
  {
    private readonly faruqi1_aushipbankContext _context;
    public Repository()
    {
      _context = new faruqi1_aushipbankContext();
    }

    public void Dispose()
    {
      _context?.Dispose();
    }

    // to edit this docReport so that I can use AllSearchBy<T>

    public IQueryable<T> All<T>() where T : class
    {
      return _context.Set<T>();
    }

    public IQueryable<T> AllIncluding<T>(params Expression<Func<T, object>>[] include) where T : class
    {
      IQueryable<T> result = _context.Set<T>();

      foreach (var item in include)
      {
        result = result.Include(item);
      }

      return result;
    }

    public IQueryable<T> AllSearchBy<T>(params Expression<Func<T, bool>>[] search) where T : class
    {
      IQueryable<T> result = _context.Set<T>();


      foreach (var item in search)
      {
        result = result.Where(item);
      }

      return result;
    }

    public IQueryable<T> SearchByPredicate<T>(Expression<Func<T, bool>> predicate) where T : class
    {
      IQueryable<T> result = _context.Set<T>();
      //result = result.AsExpandable().Where(predicate);
      return result;
    }

    public IQueryable<T> SearchByPredicateIncludeChildren<T>(Expression<Func<T, bool>> predicate,
        List<string> children) where T : class
    {
      IQueryable<T> result = _context.Set<T>();
      // Now add child entities requested
      foreach (var child in children)
      {
        result = result.Include(child);
      }
      // result = result.AsExpandable().Where(predicate);
      return result;
    }


    public void Add<T>(T model) where T : class
    {
      try
      {
        _context.Set<T>().Add(model);
        _context.SaveChanges();
      }
      catch (Exception ggg)
      {
        var jjj = "dff";
        throw;
      }
    }

    public void Update<T>(T model) where T : class
    {
      _context.Set<T>().Add(model);
      _context.Entry<T>(model).State = EntityState.Modified;
      _context.SaveChanges();
    }

    public void Remove<T>(T model) where T : class
    {
      _context.Set<T>().Remove(model);
      _context.SaveChanges();
    }


    public void GetExecuted(string str)
    {
      try
      {
        _context.Database.ExecuteSqlCommand(str);
      }
      catch (Exception rrr)
      {
        var hhh = "sd";
        return;
      }

    }

    /*Todo for Procedure if anay
    public int? spGeneratePolicy(string userCode, string userType)
    {
        var number = _context.GenerateOTPToken(userCode, userType);
        return number.FirstOrDefault();
    }*/


  }
}
