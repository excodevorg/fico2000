package com.fas.web.cmmn.dataaccess;

import java.util.List;
import javax.annotation.Resource;
import org.apache.ibatis.session.RowBounds;
import org.apache.ibatis.session.SqlSessionFactory;
import org.mybatis.spring.support.SqlSessionDaoSupport;

public class AbstractEmmnMapper extends SqlSessionDaoSupport
{
	  @Resource(name="sqlSession")
	  public void setSqlSessionFactory(SqlSessionFactory sqlSession)
	  {
	    super.setSqlSessionFactory(sqlSession);
	  }

	  public int insert(String queryId, Object parameterObject)
	  {
		 return getSqlSession().insert(queryId, parameterObject);
	  }

	  public int update(String queryId, Object parameterObject)
	  {
	    return getSqlSession().update(queryId, parameterObject);
	  }

	  public int delete(String queryId, Object parameterObject)
	  {
	    return getSqlSession().delete(queryId, parameterObject);
	  }

	  public Object selectByPk(String queryId, Object parameterObject)
	  {
	    return getSqlSession().selectOne(queryId, parameterObject);
	  }
	  
	  public Object selectByPk(String queryId)
	  {
	    return getSqlSession().selectOne(queryId);
	  }
	  
	  public Object select(String queryId)
	  {
	    return getSqlSession().selectOne(queryId);
	  }

	  public List list(String queryId)
	  {
	    return getSqlSession().selectList(queryId);
	  }

	  public List list(String queryId, Object parameterObject)
	  {
	    return getSqlSession().selectList(queryId, parameterObject);
	  }
	  
	  
	  public List listWithPaging(String queryId, Object parameterObject, int pageIndex, int pageSize)
	  {
	    int skipResults = pageIndex * pageSize;

	    RowBounds rowBounds = new RowBounds(skipResults, pageSize);

	    return getSqlSession().selectList(queryId, parameterObject, rowBounds);
	  }
	}